import { blogs } from "@/lib/source";
import { notFound } from "next/navigation";
import { absoluteUrl, formatDate } from "@/lib/utils";
import DatabaseTable from "@/components/mdx/database-tables";
import { cn } from "@/lib/utils";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { GenerateSecret } from "@/components/generate-secret";
import { AnimatePresence } from "@/components/ui/fade-in";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { Features } from "@/components/blocks/features";
import { ForkButton } from "@/components/fork-button";
import Link from "next/link";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Pre } from "fumadocs-ui/components/codeblock";
import { DocsBody } from "fumadocs-ui/page";
import { Glow } from "../_components/default-changelog";
import { IconLink } from "../_components/changelog-layout";
import { BookIcon, GitHubIcon, XIcon } from "../_components/icons";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { StarField } from "../_components/stat-field";
import Image from "next/image";
import { BlogPage } from "../_components/blog-list";

const metaTitle = "Blogs";
const metaDescription = "Latest changes , fixes and updates.";
const ogImage = "https://radas.treonstudio.com/release-og/changelog-og.png";

export default async function Page({
	params,
}: {
	params: Promise<{ slug?: string[] }>;
}) {
	const { slug } = await params;
	if (!slug) {
		return <BlogPage />;
	}
	const page = blogs.getPage(slug);
	if (!page) {
		notFound();
	}
	const MDX = page.data?.body;
	const toc = page.data?.toc;
	const { title, description, date } = page.data;
	return (
		<div className="md:flex min-h-screen items-stretch relative">
			<div className="bg-gradient-to-tr hidden md:block overflow-hidden px-12 py-24 md:py-0 -mt-[100px] md:h-dvh relative md:sticky top-0 from-transparent dark:via-stone-950/5 via-stone-100/30 to-stone-200/20 dark:to-transparent/10 min-h-screen flex-shrink-0 w-full md:w-1/2">
				<StarField className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
				<Glow />

				<div className="flex flex-col md:justify-center max-w-xl mx-auto h-full">
					<Link href="/blog" className="text-gray-600 dark:text-gray-300">
						<div className="flex flex-col">
							<div className="flex items-center cursor-pointer gap-x-2 text-xs w-full  border-white/20">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="2.5em"
									height="2.5em"
									className="rotate-180"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M2 13v-2h16.172l-3.95-3.95l1.414-1.414L22 12l-6.364 6.364l-1.414-1.414l3.95-3.95z"
									></path>
								</svg>
							</div>
							<h1 className="mt-2 relative font-sans font-semibold tracking-tighter text-4xl mb-2 border-dashed">
								{title}{" "}
							</h1>
						</div>
					</Link>

					<p className="text-gray-600 dark:text-gray-300">{description}</p>
					<div className="text-gray-600 text-sm dark:text-gray-400 flex items-center gap-x-1 text-left">
						By {page.data?.author.name} | {formatDate(page.data?.date)}
					</div>
					<div className="mt-4">
						<Image
							src={page.data?.image}
							alt={title}
							width={804}
							height={452}
							className="rounded-md border bg-muted transition-colors"
						/>
					</div>
					<hr className="h-px bg-gray-300 mt-5" />
					<div className="mt-8 flex flex-wrap text-gray-600 dark:text-gray-300 gap-x-1 gap-y-3 sm:gap-x-2">
						<IconLink
							href="/docs"
							icon={BookIcon}
							className="flex-none text-gray-600 dark:text-gray-300"
						>
							Documentation
						</IconLink>
						<IconLink
							href="https://github.com/better-auth/better-auth"
							icon={GitHubIcon}
							className="flex-none text-gray-600 dark:text-gray-300"
						>
							GitHub
						</IconLink>
						<IconLink
							href="https://discord.com/better-auth"
							icon={DiscordLogoIcon}
							className="flex-none text-gray-600 dark:text-gray-300"
						>
							Community
						</IconLink>
					</div>
					<p className="flex items-baseline absolute bottom-4 max-md:left-1/2 max-md:-translate-x-1/2 gap-x-2 text-[0.8125rem]/6 text-gray-500">
						<IconLink href="https://x.com/better_auth" icon={XIcon} compact>
							Radas.
						</IconLink>
					</p>
				</div>
			</div>
			<div className="flex-1 min-h-0 h-screen overflow-y-auto px-4 relative md:px-8 pb-12 md:py-12">
				<div className="absolute top-0 left-0 h-full -translate-x-full w-px bg-gradient-to-b from-black/5 dark:from-white/10 via-black/3 dark:via-white/5 to-transparent"></div>
				<DocsBody>
					<MDX
						components={{
							...defaultMdxComponents,
							Link: ({
								className,
								...props
							}: React.ComponentProps<typeof Link>) => (
								<Link
									className={cn(
										"font-medium underline underline-offset-4",
										className,
									)}
									{...props}
								/>
							),
							Step,
							Steps,
							File,
							Folder,
							Files,
							Tab,
							Tabs,
							Pre: Pre,
							GenerateSecret,
							AnimatePresence,
							TypeTable,
							Features,
							ForkButton,
							DatabaseTable,
							Accordion,
							Accordions,
						}}
					/>
				</DocsBody>
			</div>
		</div>
	);
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug?: string[] }>;
}) {
	const { slug } = await params;
	if (!slug) {
		return {
			metadataBase: new URL("https://radas.treonstudio.com/blogs"),
			title: metaTitle,
			description: metaDescription,
			openGraph: {
				title: metaTitle,
				description: metaDescription,
				images: [
					{
						url: ogImage,
					},
				],
				url: "https://radas.treonstudio.com/blogs",
			},
			twitter: {
				card: "summary_large_image",
				title: metaTitle,
				description: metaDescription,
				images: [ogImage],
			},
		};
	}
	const page = blogs.getPage(slug);
	if (page == null) notFound();
	const baseUrl = process.env.NEXT_PUBLIC_URL || process.env.VERCEL_URL;
	const url = new URL(
		`${baseUrl?.startsWith("http") ? baseUrl : `https://${baseUrl}`}${
			page.data?.image
		}`,
	);
	const { title, description } = page.data;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "website",
			url: absoluteUrl(`blog/${slug.join("/")}`),
			images: [
				{
					url: url.toString(),
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [url.toString()],
		},
	};
}

export function generateStaticParams() {
	return blogs.generateParams();
}
