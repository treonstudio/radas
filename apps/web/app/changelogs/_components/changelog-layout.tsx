import Link from "next/link";
import { useId } from "react";

import clsx from "clsx";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

function BookIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
			<path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
		</svg>
	);
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
			<path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
		</svg>
	);
}

function FeedIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
			/>
		</svg>
	);
}

function XIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
			<path d="M9.51762 6.77491L15.3459 0H13.9648L8.90409 5.88256L4.86212 0H0.200195L6.31244 8.89547L0.200195 16H1.58139L6.92562 9.78782L11.1942 16H15.8562L9.51728 6.77491H9.51762ZM7.62588 8.97384L7.00658 8.08805L2.07905 1.03974H4.20049L8.17706 6.72795L8.79636 7.61374L13.9654 15.0075H11.844L7.62588 8.97418V8.97384Z" />
		</svg>
	);
}

export function Intro() {
	return (
		<>
			<h1 className="mt-14  font-sans  font-semibold tracking-tighter text-5xl">
				All of the changes made will be{" "}
				<span className="">available here.</span>
			</h1>
			<p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
				Radas is comprehensive authentication library for TypeScript that
				provides a wide range of features to make authentication easier and more
				secure.
			</p>
			<hr className="h-px bg-gray-300 mt-5" />
			<div className="mt-8 flex flex-wrap text-gray-600 dark:text-gray-300  justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
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
					href="https://discord.gg/better-auth"
					icon={DiscordLogoIcon}
					className="flex-none text-gray-600 dark:text-gray-300"
				>
					Community
				</IconLink>
			</div>
		</>
	);
}

export function IntroFooter() {
	return (
		<p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
			Brought to you by{" "}
			<IconLink href="#" icon={XIcon} compact>
				RADAS.
			</IconLink>
		</p>
	);
}

export function SignUpForm() {
	let id = useId();

	return (
		<form className="relative isolate mt-8 flex items-center pr-1">
			<label htmlFor={id} className="sr-only">
				Email address
			</label>

			<div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
			<div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
		</form>
	);
}

export function IconLink({
	children,
	className,
	compact = false,
	icon: Icon,
	...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
	compact?: boolean;
	icon?: React.ComponentType<{ className?: string }>;
}) {
	return (
		<Link
			{...props}
			className={clsx(
				className,
				"group relative isolate flex items-center px-2 py-0.5 text-[0.8125rem]/6 font-medium text-black/70 dark:text-white/30 transition-colors hover:text-stone-300 rounded-none",
				compact ? "gap-x-2" : "gap-x-3",
			)}
		>
			<span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
			{Icon && <Icon className="h-4 w-4 flex-none" />}
			<span className="self-baseline text-black/70 dark:text-white">
				{children}
			</span>
		</Link>
	);
}
