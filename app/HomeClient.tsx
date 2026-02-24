"use client";

import Link from "next/link";
import "./home.css";

export default function HomeClient() {
  return (
    <>
      <section className="hero-section">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/photos/hero_video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">
            Addiction Treatment Center<br />
            Drug and Alcohol Rehab in<br />
            <span style={{ color: "#a8bfa5" }}>Santa Clarita, CA</span>
          </h1>
          <div className="hero-buttons">
            <a href="tel:18667645152" className="btn-hero btn-green">
              <i className="fas fa-phone-alt" /> Get Immediate Help
            </a>
            <Link href="/insurance-verification" className="btn-hero btn-outline">
              Verify Insurance
            </Link>
          </div>
        </div>
      </section>

      <section className="insurance-section">
        <div className="divider-wrapper reveal-on-scroll">
          <div className="divider-line" />
          <img src="/photos/divider.svg" alt="Divider Icon" className="divider-img" style={{ padding: "0 20px" }} />
          <div className="divider-line" />
        </div>
        <h2 className="insurance-header reveal-on-scroll">We Accept All PPO Insurance Plans</h2>
        <div className="insurance-content">
          <div className="insurance-text reveal-on-scroll delay-1">
            <p>
              Many patients receive a significant number of days covered by their insurance, depending on their plan.
              <br /><br />
              Please be aware that your insurance policy may or may not have defined benefits for residential treatment,
              and often limit authorization to very short-term residential treatment.
            </p>
          </div>
          <div className="insurance-image-container reveal-on-scroll delay-2">
            <img src="/photos/insurance-logos.webp" alt="Insurance Logos" className="insurance-full-img" />
          </div>
        </div>
        <div className="verify-btn-container reveal-on-scroll">
          <Link href="/insurance-verification" className="btn-verify shape-super">Verify Your Insurance Benefits</Link>
        </div>
      </section>

      <section className="reclaim-text-section">
        <div className="reclaim-watermark" />
        <div className="reclaim-container">
          <div className="reclaim-header-block reveal-on-scroll">
            <i className="fas fa-spa reclaim-icon-top" />
            <h2 className="reclaim-headline">Reclaim Your Future Free<br />From Addiction</h2>
            <p className="reclaim-intro">
              If you or a loved one needs us, you have come to the right place. Our compassionate experienced team is
              dedicated to guiding you towards a healthy, fulfilling life.
            </p>
          </div>
          <div className="reclaim-cards-row">
            <div className="reclaim-card reveal-on-scroll delay-1">
              <h3 className="card-title">Premier Addiction Treatment</h3>
              <p className="card-body">
                iVital Wellness offers premier addiction treatment services to support your recovery. With our nurturing
                atmosphere and comprehensive care, we empower you to begin a sustained recovery journey supported by
                experienced professionals who care about your healing.
              </p>
            </div>
            <div className="reclaim-card reveal-on-scroll delay-2">
              <h3 className="card-title">Customized &amp; Unique Care</h3>
              <p className="card-body">
                Understanding that each recovery journey is unique, we provide comprehensive treatments customized to
                specific needs. Whether dealing with addiction or dual diagnosis, our staff creates a plan including
                healing therapies for our &quot;Transformational Breakthrough Method.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="recovery-center-section">
        <div className="recovery-overlay" />
        <div className="recovery-content-container reveal-on-scroll">
          <h2 className="recovery-headline">Your Recovery Center</h2>
          <div className="recovery-body-text">
            <p>
              Our luxury recovery facility offers a transformative environment essential for reclaiming your life.
              Through comprehensive care and a broad range of targeted treatment options, we empower individuals to
              surmount their addiction and mental health challenges, leading to a sober and rewarding life.
            </p>
            <p>
              Our services encompass the &quot;Transformational Breakthrough Method&quot; which includes individual and
              group evidence-based behavioral therapies, family sessions IV detoxification programs, and medicated
              assisted treatments. Additionally, our recovery center provides special features and activities that
              contribute to a transformational recovery process including gourmet dining options and leisure activities,
              giving you the time and space to focus on lasting recovery.
            </p>
          </div>
          <Link href="/facility" className="btn-room-tour shape-super">
            <i className="fas fa-arrow-circle-right" /> Room Tour
          </Link>
        </div>
      </section>

      <section className="ending-addiction-section">
        <div className="ending-container">
          <h2 className="ending-headline reveal-on-scroll">Ending Your Addiction Begins Here</h2>
          <div className="ending-body reveal-on-scroll delay-1">
            <p>
              You are here because you or a loved one needs help. You do not have to look any further. Our compassionate
              experienced staff are here to be with you every step of the way. You will understand how you came to the
              right place the minute you picked up the phone and called us. Our unparalleled advanced detox treatment
              coupled with our &quot;Transformational Breakthrough Method&quot; will immediately give you the confidence
              that your addiction can be beaten and the life you deserve can begin.
            </p>
            <p>
              Making the call may feel like one of the hardest things you will ever do, but it is not hard, and it will
              be one of the best things you have ever done for yourself or a loved one. Our sole focus to get you free of
              drugs or alcohol in a comfortable, resort-like environment so that your whole focus is overcoming the
              addiction and co-occurring disorders that have been ruining your life. We have been helping people just like
              you get their lives back.
            </p>
          </div>
          <div className="leaf-decoration">
            <img src="/photos/leaves-1.svg" alt="Decoration" style={{ height: 50, width: "auto" }} />
          </div>
        </div>
      </section>

      <section className="treatment-section">
        <img src="/photos/logo.png" className="treatment-watermark" alt="Watermark" />
        <div className="treatment-container">
          <h2 className="treatment-headline reveal-on-scroll">Individualized Treatment, Advanced Detox, Luxury Setting</h2>
          <p className="treatment-subhead reveal-on-scroll">
            From your first call to us, you will know you made the right decision, how we assess and implement your
            treatment, gives you the best chance of lasting recovery.
          </p>

          {[
            {
              title: "Advanced, Medically Assisted Detox",
              desc: "Your detox experience starts from your assessment. Our highly skilled Addictionologists will know your condition before arrival. Your medically assisted detox will begin upon your arrival. No waiting, no suffering from withdrawals. Making your health under medical supervision our focus during arrival. Getting you safely and comfortably through detox into recovery makes our advanced medically assisted detox so successful.",
              link: "/drug-detox",
              img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              alt: "Detox",
              reverse: false,
            },
            {
              title: "Transformational Breakthrough Method",
              desc: "Your individualized treatment program including any co-occurring conditions under this method accurately creates evidence-based programs that include one-on-one therapy sessions, specific group therapies, and holistic treatments for overall health and lasting recovery.",
              link: "/treatment-methods",
              img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              alt: "Therapy",
              reverse: true,
            },
            {
              title: "Family Programming",
              desc: "The entire family is affected by addiction; our program is designed to support, guide, and heal your whole family. Helping you or a loved one with a strong support system is fundamental to lasting recovery.",
              link: "/treatment-methods",
              img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              alt: "Family",
              reverse: false,
            },
            {
              title: "Relapse Prevention Therapy",
              desc: "One of the pillars of our program is designed to help you recognize triggers that may lead to relapse. This program gives you the skills to avoid these triggers. Giving you or a loved one the strength and skill to avoid relapse.",
              link: "/treatment-methods",
              img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              alt: "Prevention",
              reverse: true,
            },
            {
              title: "Ongoing Alumni Support",
              desc: "iVital Wellness offers lifelong sobriety support through our ever-expanding alumni support group. This means that you are part of our family and we will always be ready to support you and your sobriety.",
              link: "/treatment-methods",
              img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              alt: "Alumni",
              reverse: false,
            },
          ].map((item, i) => (
            <div key={i} className={`treatment-row${item.reverse ? " reverse" : ""} reveal-on-scroll`}>
              <div className="treatment-text-col">
                <h3 className="treatment-item-title">{item.title}</h3>
                <div className="treatment-item-desc">{item.desc}</div>
                <Link href={item.link} className="btn-treatment shape-super">Learn More</Link>
              </div>
              <div className="treatment-img-col">
                <img src={item.img} alt={item.alt} className="treatment-img" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <div className="reviews-header reveal-on-scroll">Check Out What Our Patients Are Saying</div>
        <div className="google-badge-container reveal-on-scroll">
          <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 20 }}>
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span> Reviews
          </div>
          <div className="google-rating">5 <span className="rating-stars">★★★★★</span></div>
          <a
            href="https://www.google.com/maps/place/iVital+Wellness+Addiction+Treatment+Centre"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-google-review shape-super"
          >
            Review us on Google
          </a>
        </div>
        <div className="reviews-grid">
          <div className="review-card shape-super reveal-on-scroll">
            <div className="review-name">Jesse M</div>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Artur is a true hero he not only inspires me to do better he is good man. Gary thank you so much for doing everything you do. Kelly is the sweetest and will take care of you you will feel safe and welcome in the home just filled with nothing but caring people not for a paycheck&quot;</p>
          </div>
          <div className="review-card shape-super reveal-on-scroll delay-1">
            <div className="review-name">Baileigh Bucher</div>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Ivital wellness was so accommodating. The staff was amazing. I definitely recommend this place for anyone who&apos;s seeking recovery.&quot;</p>
          </div>
          <div className="review-card shape-super reveal-on-scroll delay-2">
            <div className="review-name">xWePro Best</div>
            <div className="review-stars">★★★★☆</div>
            <p className="review-text">&quot;Arthur is the man, Gary, Kelly, Sarah, David, angi, all the staff is just beyond amazing, I highly recommend this place for anyone trying to get off fent, it has been the only place I&apos;ve been to where my withdrawals were something I couldn&apos;t even complain about. Doctor is great and the house is always kept clean.&quot;</p>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <h2 className="blog-headline reveal-on-scroll">BLOG</h2>
        <div className="blog-grid">
          <div className="blog-card shape-super reveal-on-scroll">
            <div className="blog-img-container">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Rehab" className="blog-img" />
            </div>
            <div className="blog-content-home">
              <h3 className="blog-title-home">Substance Use Rehabilitation Santa Clarita: Comprehensive Guide to Recovery Options</h3>
              <Link href="/blog" className="blog-btn">READ MORE</Link>
            </div>
          </div>
          <div className="blog-card shape-super reveal-on-scroll delay-1">
            <div className="blog-img-container">
              <img src="/photos/undefined-1.webp" alt="Alcohol Addiction" className="blog-img" />
            </div>
            <div className="blog-content-home">
              <h3 className="blog-title-home">Alcohol Addiction Treatment Options in Santa Clarita</h3>
              <Link href="/blog" className="blog-btn">READ MORE</Link>
            </div>
          </div>
          <div className="blog-card shape-super reveal-on-scroll delay-2">
            <div className="blog-img-container">
              <img src="/photos/undefined-4.webp" alt="Pills" className="blog-img" />
            </div>
            <div className="blog-content-home">
              <h3 className="blog-title-home">Can I Quit Prescription Drugs on My Own? Why Medical Detox Matters</h3>
              <Link href="/blog" className="blog-btn">READ MORE</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="accredited-section">
        <div className="accredited-inner">
          <div className="accredited-top">
            <div className="accredited-divider-line" />
            <i className="fas fa-shield-alt accredited-shield" />
            <div className="accredited-divider-line" />
          </div>
          <h2 className="accredited-headline reveal-on-scroll">Accredited &amp; Trusted by</h2>
          <p className="accredited-sub reveal-on-scroll">Our programs meet the highest standards of care, verified by leading national organizations.</p>
          <div className="accredited-logos-grid reveal-on-scroll">
            <div className="accredited-card">
              <img src="/photos/DHCS.png" alt="DHCS" className="accredited-logo" />
              <span className="accredited-label">DHCS Licensed</span>
            </div>
            <div className="accredited-card">
              <img src="/photos/LegitScript.png" alt="LegitScript" className="accredited-logo" />
              <span className="accredited-label">LegitScript Certified</span>
            </div>
            <div className="accredited-card">
              <img src="/photos/joint.png" alt="Joint Commission" className="accredited-logo" />
              <span className="accredited-label">Joint Commission</span>
            </div>
            <div className="accredited-card">
              <img src="/photos/ASAM.png" alt="ASAM" className="accredited-logo" />
              <span className="accredited-label">ASAM Member</span>
            </div>
            <div className="accredited-card">
              <img src="/photos/SAMHSA.png" alt="SAMHSA" className="accredited-logo accredited-logo-white" />
              <span className="accredited-label">SAMHSA Listed</span>
            </div>
            <div className="accredited-card">
              <img src="/photos/Psychology-Today.png" alt="Psychology Today" className="accredited-logo" />
              <span className="accredited-label">Psychology Today</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
