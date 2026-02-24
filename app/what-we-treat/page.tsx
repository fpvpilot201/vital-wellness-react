import HtmlPage from "../components/HtmlPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Treat | iVital Wellness Santa Clarita",
  description:
    "Treatment for alcohol, cocaine, heroin, prescription drugs, meth, opioid, xanax, and co-occurring disorders at iVital Wellness.",
  alternates: { canonical: "/what-we-treat" },
  openGraph: {
    title: "What We Treat | iVital Wellness Santa Clarita",
    description: "Treatment for alcohol, cocaine, heroin, prescription drugs, meth, opioid, xanax, and co-occurring disorders at iVital Wellness.",
    url: "/what-we-treat",
    images: [{ url: "/photos/iVital-Wellness-House.jpg", width: 1200, height: 630, alt: "iVital Wellness Addiction Treatment Center" }],
  },
};

const css = `
.page-hero { background-color: #F9F7F2; padding: 100px 0 80px; text-align: center; position: relative; overflow: hidden; }
.hero-watermark { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-radial-gradient(circle at 50% 50%, #ffffff 0, #ffffff 10px, #F4F1EA 11px, #F4F1EA 20px); opacity: 0.4; pointer-events: none; z-index: 0; }
.page-hero .hero-content { position: relative; z-index: 2; }
.page-title { font-family: 'Playfair Display', serif; font-size: 48px; color: #6a7c64; margin-bottom: 15px; font-weight: 400; }
.hero-divider { margin-bottom: 20px; }
.page-subtitle { font-family: 'Lato', sans-serif; font-size: 16px; color: #666; letter-spacing: 1px; }
.treat-container { width: 88%; max-width: 1200px; margin: 60px auto; }
.treat-tabs { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 50px; justify-content: center; }
.treat-tab { padding: 10px 20px; background: #fff; border: 1px solid #ddd; border-radius: 30px; font-family: 'Lato', sans-serif; font-size: 14px; color: #555; cursor: pointer; transition: all 0.3s; text-decoration: none; }
.treat-tab:hover, .treat-tab.active { background: #6a7c64; color: white; border-color: #6a7c64; }
.treat-section { padding: 40px 0; border-bottom: 1px solid #eee; }
.treat-section:last-child { border-bottom: none; }
.treat-title { font-family: 'Playfair Display', serif; font-size: 32px; color: #2c3e29; margin-bottom: 20px; }
.treat-text { font-family: 'Lato', sans-serif; font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 15px; }
.treat-text ul { padding-left: 20px; margin-top: 10px; }
.treat-text li { margin-bottom: 8px; }
`;

const html = `
<header class="page-hero">
    <div class="hero-watermark"></div>
    <div class="hero-content">
        <h1 class="page-title">What We Treat</h1>
        <div class="hero-divider"><i class="fas fa-leaf"></i></div>
        <p class="page-subtitle">Comprehensive Addiction & Mental Health Treatment</p>
    </div>
</header>
<div class="treat-container">
    <div class="treat-tabs">
        <a href="#alcohol" class="treat-tab">Alcohol</a>
        <a href="#cocaine" class="treat-tab">Cocaine</a>
        <a href="#marijuana" class="treat-tab">Marijuana</a>
        <a href="#prescription" class="treat-tab">Prescription Drugs</a>
        <a href="#heroin" class="treat-tab">Heroin</a>
        <a href="#benzo" class="treat-tab">Benzodiazepines</a>
        <a href="#meth" class="treat-tab">Methamphetamine</a>
        <a href="#opioid" class="treat-tab">Opioids</a>
        <a href="#xanax" class="treat-tab">Xanax</a>
        <a href="#co-occurring" class="treat-tab">Co-Occurring Disorders</a>
        <a href="#hallucinogen" class="treat-tab">Hallucinogens</a>
    </div>
    
    <section id="alcohol" class="treat-section">
        <h2 class="treat-title">Alcohol Addiction</h2>
        <div class="treat-text">
            <p>Alcohol addiction is one of the most common substance use disorders, affecting millions of individuals and families. At iVital Wellness, we understand that alcohol dependence develops gradually and can have severe physical, psychological, and social consequences. Our comprehensive alcohol treatment program addresses both the physical dependence and the underlying psychological factors that contribute to addiction.</p>
            <p>Our medically supervised alcohol detox program ensures safe withdrawal management, minimizing the risk of dangerous complications such as seizures or delirium tremens. Following detox, clients participate in intensive residential treatment that includes individual therapy, group counseling, and evidence-based interventions designed to address the root causes of alcohol abuse.</p>
            <p>We recognize that recovery from alcohol addiction requires long-term support and relapse prevention strategies. Our treatment team works closely with each client to develop personalized aftercare plans that support sustained sobriety and help rebuild healthy relationships and professional lives.</p>
            <ul>
                <li>Increased tolerance requiring more alcohol to achieve the same effect</li>
                <li>Withdrawal symptoms when not drinking</li>
                <li>Loss of control over drinking behavior</li>
                <li>Neglecting responsibilities at work, home, or school</li>
                <li>Continued drinking despite negative consequences</li>
            </ul>
        </div>
    </section>
    
    <section id="cocaine" class="treat-section">
        <h2 class="treat-title">Cocaine Addiction</h2>
        <div class="treat-text">
            <p>Cocaine is a highly addictive stimulant that can lead to severe physical and psychological dependence. The intense euphoria and energy boost from cocaine use often mask the dangerous side effects, including cardiovascular problems, respiratory issues, and mental health disorders. At iVital Wellness, we provide specialized treatment for cocaine addiction that addresses both the immediate withdrawal symptoms and the long-term psychological cravings.</p>
            <p>Our cocaine addiction treatment program focuses on helping clients understand the neurological changes that occur with chronic cocaine use. Through a combination of medical support, behavioral therapies, and holistic interventions, we help individuals break free from the cycle of cocaine abuse and develop healthier coping mechanisms.</p>
            <p>Treatment includes cognitive-behavioral therapy to address the triggers and thought patterns that lead to cocaine use, as well as group therapy sessions that provide peer support and accountability. Our team also addresses co-occurring mental health conditions that may contribute to cocaine addiction, such as depression, anxiety, or trauma-related disorders.</p>
        </div>
    </section>
    
    <section id="marijuana" class="treat-section">
        <h2 class="treat-title">Marijuana Addiction</h2>
        <div class="treat-text">
            <p>While marijuana is often perceived as less harmful than other substances, marijuana use disorder is a real and serious condition that can significantly impact an individual's life. At iVital Wellness, we recognize that marijuana addiction can lead to decreased motivation, impaired cognitive function, relationship problems, and financial difficulties. Our treatment approach addresses both the physical dependence and the psychological patterns associated with chronic marijuana use.</p>
            <p>Our marijuana addiction treatment program helps clients understand how marijuana use has affected their lives and provides tools for building a fulfilling life without substance use. Treatment includes individual counseling to explore the reasons behind marijuana use, group therapy for peer support, and skill-building workshops to develop healthier habits and interests.</p>
            <p>We also address the unique challenges of marijuana withdrawal, which can include irritability, sleep disturbances, decreased appetite, and mood changes. Our medical team provides support throughout the withdrawal process, and our therapeutic interventions help clients develop new routines and coping strategies that support long-term recovery.</p>
        </div>
    </section>
    
    <section id="prescription" class="treat-section">
        <h2 class="treat-title">Prescription Drug Addiction</h2>
        <div class="treat-text">
            <p>Prescription drug addiction has become a critical public health issue, affecting individuals from all walks of life. Whether it's opioid painkillers, stimulants, or sedatives, prescription drug misuse can quickly lead to dependence and addiction. At iVital Wellness, we provide specialized treatment for prescription drug addiction that addresses the unique challenges of these substances.</p>
            <p>Our prescription drug treatment program begins with a comprehensive medical assessment to understand the specific medications involved and develop a safe detoxification plan. We work closely with clients' prescribing physicians when appropriate and ensure that any underlying medical conditions are properly managed during treatment.</p>
            <p>Treatment includes education about the dangers of prescription drug misuse, individual therapy to address the reasons for misuse, and group therapy to provide support from others facing similar challenges. We also help clients develop strategies for managing pain or other medical conditions without relying on addictive medications, incorporating alternative therapies and holistic approaches when appropriate.</p>
            <ul>
                <li>Taking larger doses than prescribed</li>
                <li>Using medications for non-medical purposes</li>
                <li>Doctor shopping or obtaining prescriptions from multiple sources</li>
                <li>Experiencing withdrawal symptoms when not using</li>
                <li>Continued use despite negative consequences</li>
            </ul>
        </div>
    </section>
    
    <section id="heroin" class="treat-section">
        <h2 class="treat-title">Heroin Addiction</h2>
        <div class="treat-text">
            <p>Heroin addiction is one of the most severe and dangerous forms of substance use disorder. The rapid development of tolerance and physical dependence makes heroin extremely difficult to quit without professional help. At iVital Wellness, we provide comprehensive heroin addiction treatment that prioritizes safety during detoxification and addresses the complex psychological and social factors that contribute to heroin use.</p>
            <p>Our heroin treatment program begins with medically supervised detoxification, which is essential for managing the severe withdrawal symptoms that can occur when stopping heroin use. Our medical team provides 24/7 monitoring and support, using evidence-based medications when appropriate to ease withdrawal symptoms and reduce cravings.</p>
            <p>Following detox, clients participate in intensive residential treatment that includes individual therapy, group counseling, and specialized interventions for heroin addiction. We address the trauma, mental health conditions, and social factors that often contribute to heroin use, helping clients build a foundation for long-term recovery. Our aftercare planning ensures ongoing support and access to resources that help prevent relapse.</p>
        </div>
    </section>
    
    <section id="benzo" class="treat-section">
        <h2 class="treat-title">Benzodiazepine Addiction</h2>
        <div class="treat-text">
            <p>Benzodiazepines, commonly prescribed for anxiety and sleep disorders, can lead to physical dependence even when taken as prescribed. Withdrawal from benzodiazepines can be dangerous and should always be medically supervised. At iVital Wellness, we specialize in the safe treatment of benzodiazepine addiction, providing gradual tapering protocols and comprehensive support throughout the withdrawal process.</p>
            <p>Our benzodiazepine treatment program recognizes that many individuals develop dependence while trying to manage legitimate medical conditions. We work with clients to develop alternative strategies for managing anxiety, insomnia, and other conditions, incorporating therapy, mindfulness practices, and other non-pharmacological interventions.</p>
            <p>Treatment includes medical monitoring during the tapering process, individual therapy to address underlying anxiety or trauma, and group therapy for peer support. We also provide education about the risks of benzodiazepine use and help clients develop long-term strategies for managing their conditions without relying on these medications.</p>
        </div>
    </section>
    
    <section id="meth" class="treat-section">
        <h2 class="treat-title">Methamphetamine Addiction</h2>
        <div class="treat-text">
            <p>Methamphetamine is a highly addictive stimulant that can cause severe physical and psychological damage. The intense high and long-lasting effects make methamphetamine extremely difficult to quit, and withdrawal can involve severe depression, fatigue, and intense cravings. At iVital Wellness, we provide specialized treatment for methamphetamine addiction that addresses both the acute withdrawal phase and the long-term recovery process.</p>
            <p>Our methamphetamine treatment program focuses on helping clients recover from the neurological damage caused by chronic meth use. Treatment includes medical support during withdrawal, nutritional therapy to restore physical health, and intensive behavioral therapies to address the psychological aspects of addiction.</p>
            <p>We recognize that methamphetamine addiction often co-occurs with mental health conditions, trauma, and social factors. Our comprehensive approach addresses all of these factors, providing individual therapy, group counseling, and specialized interventions designed to support long-term recovery. We also help clients rebuild relationships, develop healthy routines, and find purpose and meaning in life without substance use.</p>
        </div>
    </section>
    
    <section id="opioid" class="treat-section">
        <h2 class="treat-title">Opioid Addiction</h2>
        <div class="treat-text">
            <p>The opioid crisis has affected millions of Americans, and opioid addiction can develop from prescription painkillers, heroin, or synthetic opioids like fentanyl. At iVital Wellness, we provide comprehensive opioid addiction treatment that addresses the unique challenges of opioid dependence, including severe withdrawal symptoms and intense cravings.</p>
            <p>Our opioid treatment program begins with medically supervised detoxification, which is essential for managing the uncomfortable and potentially dangerous withdrawal symptoms. We use evidence-based medications when appropriate to ease withdrawal and reduce cravings, always under careful medical supervision.</p>
            <p>Following detox, clients participate in intensive treatment that includes individual therapy, group counseling, and specialized interventions for opioid addiction. We address the underlying pain conditions, trauma, or mental health issues that may have contributed to opioid use, and we help clients develop alternative strategies for managing pain and emotional distress. Our comprehensive aftercare planning ensures ongoing support and access to resources that help prevent relapse.</p>
        </div>
    </section>
    
    <section id="xanax" class="treat-section">
        <h2 class="treat-title">Xanax Addiction</h2>
        <div class="treat-text">
            <p>Xanax (alprazolam) is a benzodiazepine commonly prescribed for anxiety and panic disorders, but it can quickly lead to physical dependence and addiction. Withdrawal from Xanax can be severe and should always be medically supervised. At iVital Wellness, we provide specialized treatment for Xanax addiction that prioritizes safety during the withdrawal process.</p>
            <p>Our Xanax treatment program includes a gradual tapering protocol supervised by our medical team, who monitor clients closely for withdrawal symptoms and adjust the taper as needed. We also provide comprehensive therapy to address the underlying anxiety or panic disorders that led to Xanax use, helping clients develop healthier coping strategies.</p>
            <p>Treatment includes individual therapy using cognitive-behavioral techniques, group therapy for peer support, and holistic interventions such as mindfulness and relaxation training. We help clients understand the risks of Xanax use and develop long-term strategies for managing anxiety without relying on benzodiazepines.</p>
        </div>
    </section>
    
    <section id="co-occurring" class="treat-section">
        <h2 class="treat-title">Co-Occurring Disorders</h2>
        <div class="treat-text">
            <p>Many individuals struggling with addiction also face mental health conditions such as depression, anxiety, bipolar disorder, PTSD, or other psychiatric disorders. These co-occurring disorders require integrated treatment that addresses both the substance use and the mental health condition simultaneously. At iVital Wellness, we specialize in dual diagnosis treatment that provides comprehensive care for both conditions.</p>
            <p>Our dual diagnosis program includes psychiatric evaluation and medication management when appropriate, individual therapy that addresses both addiction and mental health, and group therapy that provides support from others facing similar challenges. We recognize that untreated mental health conditions can contribute to substance use, and that substance use can worsen mental health symptoms, so we address both conditions together.</p>
            <p>Treatment is personalized to each client's unique needs, with our team of addiction specialists and mental health professionals working together to develop a comprehensive treatment plan. We help clients understand the relationship between their mental health and substance use, develop healthy coping strategies, and build a foundation for long-term recovery that addresses all aspects of their well-being.</p>
        </div>
    </section>
    
    <section id="hallucinogen" class="treat-section">
        <h2 class="treat-title">Hallucinogen Addiction</h2>
        <div class="treat-text">
            <p>While hallucinogens like LSD, psilocybin mushrooms, and PCP may not cause physical dependence in the same way as other substances, they can lead to psychological dependence and cause serious mental health problems. At iVital Wellness, we provide treatment for hallucinogen use disorders that addresses the unique challenges of these substances.</p>
            <p>Our hallucinogen treatment program focuses on helping clients understand the risks and consequences of hallucinogen use, including the potential for persistent psychosis, flashbacks, and other mental health complications. Treatment includes individual therapy to address the reasons for use, group therapy for peer support, and specialized interventions for any mental health symptoms that may have developed.</p>
            <p>We also address any co-occurring mental health conditions that may have contributed to hallucinogen use, and we help clients develop healthier ways to explore consciousness, spirituality, or personal growth. Our comprehensive approach supports clients in building a fulfilling life without relying on hallucinogenic substances.</p>
        </div>
    </section>
</div>
`;

export default function WhatWeTreatPage() {
  return <HtmlPage html={html} css={css} />;
}
