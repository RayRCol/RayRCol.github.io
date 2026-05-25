import { MotionConfig, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import type { FooterMeta, NavLink } from '../data/site';
import BrandLogo from './BrandLogo';
import { aeonEase } from './motion';

interface FooterSectionProps {
  directory: NavLink[];
  meta: FooterMeta;
  policies: string[];
}

export default function FooterSection({ directory, meta, policies }: FooterSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <MotionConfig reducedMotion="user">
      <motion.footer
        id="site-footer"
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.85, ease: aeonEase }}
        className="bg-footer-bg py-18 sm:py-22"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <BrandLogo className="w-[min(100%,22rem)] sm:w-[28rem]" />
            <p className="mt-6 max-w-xl text-[1.1rem] leading-8 text-white/60">{meta.description}</p>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/8 pt-8 text-[0.95rem] uppercase tracking-[0.08em] text-white/42 md:flex-row md:items-center md:justify-between">
            <p>© 2026 RAMON RUEDA. ALL RIGHTS RESERVED.</p>
            <div className="flex flex-wrap gap-6">
              {policies.map((policy) => (
                <span key={policy}>{policy}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </MotionConfig>
  );
}
