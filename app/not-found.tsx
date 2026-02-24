import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
.error-container { height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px; background-color: #F9F7F2; }
.error-code { font-size: 120px; color: #6a7c64; margin-bottom: 20px; font-family: 'Playfair Display', serif; }
.error-title { font-size: 36px; color: #2c3e29; margin-bottom: 20px; font-family: 'Playfair Display', serif; }
.error-text { font-family: 'Lato', sans-serif; font-size: 18px; color: #666; margin-bottom: 40px; }
.error-link { color: #556350; text-decoration: none; font-family: 'Lato', sans-serif; font-weight: 600; border-bottom: 2px solid #556350; transition: color 0.3s ease; }
.error-link:hover { color: #6a7c64; border-bottom-color: #6a7c64; }
        `
      }} />
      <div className="error-container">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-text">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="error-link">
          Return to Home
        </Link>
      </div>
    </>
  );
}
