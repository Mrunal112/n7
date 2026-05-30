import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Container } from "@/components/ui/Container";
import { footerLinks, footerOffices } from "@/lib/data";
import { images } from "@/lib/images";

const footerColumns = [
  {
    office: footerOffices[0],
    title: "Solutions",
    links: footerLinks.solutions,
  },
  {
    office: footerOffices[1],
    title: "N7 Banking",
    links: footerLinks.banking,
  },
  {
    office: footerOffices[2],
    title: "Our Socials",
    links: footerLinks.socials,
  },
] as const;

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#050a0e]">
      <CtaBanner id="contact" watermark="N7" plain />

      <Container className="relative z-10 pb-16 pt-6 lg:pb-20 lg:pt-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-6 lg:gap-y-0 xl:gap-x-10">
          {/* Logo — spans both rows; top edge aligns with London / Dubai / Pune */}
          <div className="lg:col-span-5 lg:row-span-2 lg:row-start-1">
            <div className="relative h-[190px] w-full max-w-[340px] overflow-hidden sm:h-[210px] sm:max-w-[380px] lg:h-[250px] lg:max-w-[440px] xl:h-[270px] xl:max-w-[480px]">
              <Image
                src={images.brand.logoN7Large}
                alt="N7"
                fill
                className="scale-[1.12] object-cover object-[center_2%]"
                sizes="(max-width: 1024px) 380px, 480px"
                priority
              />
            </div>
          </div>

          {/* Row 1 — office locations */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-y-0 lg:gap-x-10 xl:gap-x-14">
              {footerColumns.map(({ office }) => (
                <div key={office.city} className="min-w-0">
                  <h3 className="text-[15px] font-semibold leading-snug text-white">
                    {office.city}
                  </h3>
                  <p className="mt-4 text-[13px] leading-[1.7] text-[#8a9ab5]">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — link columns (Solutions, N7 Banking, Our Socials) */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:mt-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-y-0 lg:gap-x-10 xl:gap-x-14">
              {footerColumns.map(({ office, title, links }) => (
                <div key={`${office.city}-links`} className="min-w-0">
                  <h3 className="text-[15px] font-semibold leading-snug text-white">{title}</h3>
                  <ul className="mt-5 space-y-4">
                    {links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="group grid grid-cols-[minmax(0,1fr)_12px] items-start gap-x-4 text-[13px] leading-snug text-[#94a3b8] transition hover:text-white"
                        >
                          <span className="min-w-0">{link}</span>
                          <span
                            className="mt-0.5 text-brand-cyan transition group-hover:translate-x-0.5"
                            aria-hidden
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid lg:mt-16 lg:grid-cols-12 lg:gap-x-6 xl:gap-x-10">
          <div className="hidden lg:col-span-5 lg:block" aria-hidden />
          <p className="text-left text-[11px] leading-relaxed text-[#6b7280] lg:col-span-7 lg:col-start-6">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
            Commercial Brand] — [Registered under the Companies Act 2006 in
            England and Wales | Number of Incorporation 13100992]
          </p>
        </div>
      </Container>
    </footer>
  );
}
