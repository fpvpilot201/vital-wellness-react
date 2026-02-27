"use client";

import { useState, useRef, useEffect } from "react";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
}

function formatDate(y: number, m: number, d: number) {
    return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

interface DatePickerProps {
    name: string;
    required?: boolean;
    minAge?: number;
}

export default function DatePicker({ name, required = false, minAge = 18 }: DatePickerProps) {
    const today = new Date();
    const [open, setOpen] = useState(false);
    const [viewYear, setViewYear] = useState(today.getFullYear() - 25);
    const [viewMonth, setViewMonth] = useState(today.getMonth());
    const [selected, setSelected] = useState<{ y: number; m: number; d: number } | null>(null);
    const [error, setError] = useState("");
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const checkAge = (y: number, m: number, d: number) => {
        const birthDate = new Date(y, m, d);
        const ageDiff = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();
        const age = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? ageDiff - 1 : ageDiff;
        return age >= minAge;
    };

    const handleSelect = (day: number) => {
        if (!checkAge(viewYear, viewMonth, day)) {
            setError(`You must be ${minAge}+ years old`);
            setSelected(null);
            return;
        }
        setError("");
        setSelected({ y: viewYear, m: viewMonth, d: day });
        setOpen(false);
    };

    const prevMonth = () => {
        if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
        else setViewMonth(viewMonth - 1);
    };
    const nextMonth = () => {
        if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
        else setViewMonth(viewMonth + 1);
    };

    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const isToday = (d: number) =>
        viewYear === today.getFullYear() && viewMonth === today.getMonth() && d === today.getDate();
    const isSelected = (d: number) =>
        selected && viewYear === selected.y && viewMonth === selected.m && d === selected.d;
    const isFuture = (d: number) =>
        new Date(viewYear, viewMonth, d) > today;

    const displayValue = selected
        ? `${MONTHS[selected.m]} ${selected.d}, ${selected.y}`
        : "";

    return (
        <div className="datepicker-wrap" ref={wrapRef}>
            <input type="hidden" name={name} value={selected ? formatDate(selected.y, selected.m, selected.d) : ""} />
            <div
                className={`datepicker-trigger${open ? " active" : ""}${error ? " has-error" : ""}`}
                onClick={() => setOpen(!open)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpen(!open); }}
            >
                <span className={`datepicker-value${!displayValue ? " placeholder" : ""}`}>
                    {displayValue || "Date of Birth"}
                </span>
                <span className="datepicker-icon">📅</span>
            </div>

            {error && <div className="datepicker-error">{error}</div>}

            {open && (
                <div className="datepicker-dropdown">
                    <div className="datepicker-header">
                        <button type="button" className="datepicker-nav" onClick={prevMonth}>‹</button>
                        <div className="datepicker-header-center">
                            <select
                                className="datepicker-select"
                                value={viewMonth}
                                onChange={(e) => setViewMonth(Number(e.target.value))}
                            >
                                {MONTHS.map((m, i) => <option key={i} value={i}>{m}</option>)}
                            </select>
                            <select
                                className="datepicker-select"
                                value={viewYear}
                                onChange={(e) => setViewYear(Number(e.target.value))}
                            >
                                {Array.from({ length: 100 }, (_, i) => today.getFullYear() - i).map((y) => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        <button type="button" className="datepicker-nav" onClick={nextMonth}>›</button>
                    </div>

                    <div className="datepicker-days-header">
                        {DAYS.map((d) => <span key={d} className="datepicker-day-label">{d}</span>)}
                    </div>

                    <div className="datepicker-grid">
                        {Array.from({ length: firstDay }).map((_, i) => (
                            <span key={`e-${i}`} className="datepicker-empty" />
                        ))}
                        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                            <button
                                key={d}
                                type="button"
                                className={`datepicker-day${isToday(d) ? " today" : ""}${isSelected(d) ? " selected" : ""}${isFuture(d) ? " disabled" : ""}`}
                                onClick={() => !isFuture(d) && handleSelect(d)}
                                disabled={isFuture(d)}
                            >
                                {d}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {required && !selected && (
                <input
                    type="text"
                    required
                    value=""
                    onChange={() => { }}
                    style={{ position: "absolute", opacity: 0, width: 0, height: 0, pointerEvents: "none" }}
                    tabIndex={-1}
                />
            )}
        </div>
    );
}
