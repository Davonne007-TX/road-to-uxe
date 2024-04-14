export default function Image({ src, alt, className }) {
  return <img src={src} alt={alt} className={`w-8 ${className}`} />;
}
