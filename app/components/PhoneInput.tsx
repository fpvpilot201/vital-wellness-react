"use client";

import { useState, useRef, useEffect } from "react";

interface Country {
    code: string;
    flag: string;
    dial: string;
    digits: number;
}

const countries: Country[] = [
    { code: "US", flag: "🇺🇸", dial: "+1", digits: 10 },
    { code: "CA", flag: "🇨🇦", dial: "+1", digits: 10 },
    { code: "GB", flag: "🇬🇧", dial: "+44", digits: 10 },
    { code: "MX", flag: "🇲🇽", dial: "+52", digits: 10 },
    { code: "AU", flag: "🇦🇺", dial: "+61", digits: 9 },
    { code: "DE", flag: "🇩🇪", dial: "+49", digits: 11 },
    { code: "FR", flag: "🇫🇷", dial: "+33", digits: 9 },
    { code: "IN", flag: "🇮🇳", dial: "+91", digits: 10 },
    { code: "BR", flag: "🇧🇷", dial: "+55", digits: 11 },
    { code: "PH", flag: "🇵🇭", dial: "+63", digits: 10 },
    { code: "CN", flag: "🇨🇳", dial: "+86", digits: 11 },
    { code: "JP", flag: "🇯🇵", dial: "+81", digits: 10 },
    { code: "KR", flag: "🇰🇷", dial: "+82", digits: 10 },
    { code: "IT", flag: "🇮🇹", dial: "+39", digits: 10 },
    { code: "ES", flag: "🇪🇸", dial: "+34", digits: 9 },
    { code: "RU", flag: "🇷🇺", dial: "+7", digits: 10 },
    { code: "NG", flag: "🇳🇬", dial: "+234", digits: 10 },
    { code: "ZA", flag: "🇿🇦", dial: "+27", digits: 9 },
    { code: "AE", flag: "🇦🇪", dial: "+971", digits: 9 },
    { code: "IL", flag: "🇮🇱", dial: "+972", digits: 9 },
    { code: "CO", flag: "🇨🇴", dial: "+57", digits: 10 },
    { code: "AR", flag: "🇦🇷", dial: "+54", digits: 10 },
    { code: "AM", flag: "🇦🇲", dial: "+374", digits: 8 },
];

interface PhoneInputProps {
    name: string;
    placeholder?: string;
    required?: boolean;
}

export default function PhoneInput({ name, placeholder = "Phone Number", required = false }: PhoneInputProps) {
    const [selected, setSelected] = useState(countries[0]);
    const [digits, setDigits] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    const handleInput = (val: string) => {
        const cleaned = val.replace(/\D/g, "");
        setDigits(cleaned.slice(0, selected.digits));
    };

    const fullValue = digits ? `${selected.dial}${digits}` : "";

    return (
        <div className="phone-input-wrap" ref={wrapperRef}>
            <input type="hidden" name={name} value={fullValue} />

            <button
                type="button"
                className="phone-flag-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-label="Select country"
            >
                <span className="phone-flag-emoji">{selected.flag}</span>
                <span className="phone-dial-code">{selected.dial}</span>
                <span className="phone-chevron">▾</span>
            </button>

            <input
                type="tel"
                className="phone-digits-input"
                placeholder={placeholder}
                value={digits}
                onChange={(e) => handleInput(e.target.value)}
                maxLength={selected.digits}
                required={required}
                inputMode="numeric"
                pattern="[0-9]*"
            />

            {dropdownOpen && (
                <div className="phone-dropdown">
                    {countries.map((c) => (
                        <button
                            key={c.code}
                            type="button"
                            className={`phone-dropdown-item${c.code === selected.code ? " active" : ""}`}
                            onClick={() => {
                                setSelected(c);
                                setDigits((prev) => prev.slice(0, c.digits));
                                setDropdownOpen(false);
                            }}
                        >
                            <span className="phone-flag-emoji">{c.flag}</span>
                            <span className="phone-country-code">{c.code}</span>
                            <span className="phone-dial-code">{c.dial}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
