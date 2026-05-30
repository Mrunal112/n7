import { InsightGraphic } from "@/components/icons/ServiceIcons";
import { FadeIn } from "@/components/ui/FadeIn";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { Container } from "@/components/ui/Container";
import { PageSection } from "@/components/ui/PageSection";
import { insightsArticles } from "@/lib/data";
import { viewAllButton } from "@/lib/section-styles";
import Link from "next/link";

function FeaturedArticleCard({
  category,
  title,
  author,
  date,
}: {
  category: string;
  title: string;
  author: string;
  date: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(10,16,24,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_24px_60px_rgba(0,40,120,0.35)] sm:flex-row">
      <div className="sm:w-[42%]">
        <InsightGraphic className="min-h-[200px] sm:min-h-full" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">
            {category}
          </p>
          <h3 className="mt-4 text-xl font-medium leading-snug text-white lg:text-2xl">
            {title}
          </h3>
          <p className="mt-3 text-xs text-[#94a3b8]">
            {author} {date}
          </p>
        </div>
        <Link
          href="#insights"
          className="mt-8 inline-flex h-10 w-full items-center justify-center rounded-sm border border-white/25 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-white/[0.06] sm:w-auto sm:min-w-[140px]"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}

function CompactArticleCard({
  category,
  title,
  author,
  date,
}: {
  category: string;
  title: string;
  author: string;
  date: string;
}) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/[0.08] bg-[rgba(10,16,24,0.45)] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_24px_60px_rgba(0,40,120,0.3)] sm:p-7 lg:p-8">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">
          {category}
        </p>
        <h3 className="mt-4 text-lg font-medium leading-snug text-white lg:text-xl">
          {title}
        </h3>
        <p className="mt-3 text-xs text-[#94a3b8]">
          {author} {date}
        </p>
      </div>
      <Link
        href="#insights"
        className="mt-10 inline-flex h-10 w-full items-center justify-center rounded-sm border border-white/25 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-white/[0.06]"
      >
        Read more
      </Link>
    </article>
  );
}

export function InsightsSection() {
  const [featured, ...rest] = insightsArticles;

  return (
    <PageSection id="insights">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <FadeIn className="lg:col-span-4 lg:pt-2">
            <h2 className="text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.35rem] lg:text-[2.5rem]">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <Link href="#insights" className={`${viewAllButton} mt-10`}>
              View all
            </Link>
          </FadeIn>

          <div className="space-y-6 lg:col-span-8">
            <FadeIn delay={0.06}>
              <FeaturedArticleCard {...featured} />
            </FadeIn>
            <div className="grid gap-6 sm:grid-cols-2">
              {rest.map((article, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.05}>
                  <CompactArticleCard {...article} />
                </FadeIn>
              ))}
            </div>
            <div className="flex justify-end pt-2">
              <LearnMoreLink href="#insights">Read all insights →</LearnMoreLink>
            </div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
