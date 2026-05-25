type BrandLogoKind = 'symbol' | 'wordmark';
type BrandLogoTone = 'dark' | 'light' | 'theme';

interface BrandLogoProps {
  className?: string;
  kind?: BrandLogoKind;
  label?: string;
  tone?: BrandLogoTone;
}

const toneClass: Record<BrandLogoTone, string> = {
  dark: 'text-white',
  light: 'text-navy-text',
  theme: 'text-white',
};

export default function BrandLogo({
  className = '',
  kind = 'wordmark',
  label = 'Ramon Rueda',
  tone = 'theme',
}: BrandLogoProps) {
  const color = toneClass[tone];

  if (kind === 'symbol') {
    return (
      <span
        aria-label={label}
        className={`inline-flex items-center justify-center ${color} ${className}`.trim()}
        role="img"
      >
        <span className="font-display text-[1.6em] font-bold leading-none tracking-tight">
          RR
        </span>
      </span>
    );
  }

  return (
    <span
      aria-label={label}
      className={`inline-flex items-center ${color} ${className}`.trim()}
      role="img"
    >
      <span className="font-display text-[0.72em] font-bold uppercase leading-none tracking-[0.18em]">
        Ramon Rueda
      </span>
    </span>
  );
}
