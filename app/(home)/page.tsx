import PokemonPage from "@/registry/new-york/blocks/complex-component/components/pokemon-page";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import Link from "next/link";
import { OpenInV0Button } from "../../components/open-in-v0-button";

export default function HomePage() {
	return (
		<main className="flex flex-col flex-1 justify-center text-center">
			<div className="flex flex-col justify-center h-screen">
				<h1 className="mb-4 font-bold text-2xl">Hello World</h1>
				<p className="text-fd-muted-foreground">
					You can open{" "}
					<Link
						href="/docs"
						className="font-semibold text-fd-foreground underline"
					>
						/docs
					</Link>{" "}
					and see the documentation.
				</p>
				<p className="mt-4">Scroll down to see the custom registry</p>
			</div>

			<div className="flex flex-col gap-8 mx-auto px-4 py-8 max-w-3xl min-h-svh">
				<header className="flex flex-col gap-1">
					<h1 className="font-bold text-3xl tracking-tight">Custom Registry</h1>
				</header>
				<main className="flex flex-col flex-1 gap-8">
					<div className="relative flex flex-col gap-4 p-4 border rounded-lg min-h-[450px]">
						<div className="flex justify-between items-center">
							<h2 className="sm:pl-3 text-muted-foreground text-sm">
								A simple hello world component
							</h2>
							<OpenInV0Button name="hello-world" className="w-fit" />
						</div>
						<div className="relative flex justify-center items-center min-h-[400px]">
							<HelloWorld />
						</div>
					</div>

					<div className="relative flex flex-col gap-4 p-4 border rounded-lg min-h-[450px]">
						<div className="flex justify-between items-center">
							<h2 className="sm:pl-3 text-muted-foreground text-sm">
								A contact form with Zod validation.
							</h2>
							<OpenInV0Button name="example-form" className="w-fit" />
						</div>
						<div className="relative flex justify-center items-center min-h-[500px]">
							<ExampleForm />
						</div>
					</div>

					<div className="relative flex flex-col gap-4 p-4 border rounded-lg min-h-[450px]">
						<div className="flex justify-between items-center">
							<h2 className="sm:pl-3 text-muted-foreground text-sm">
								A complex component showing hooks, libs and components.
							</h2>
							<OpenInV0Button name="complex-component" className="w-fit" />
						</div>
						<div className="relative flex justify-center items-center min-h-[400px]">
							<PokemonPage />
						</div>
					</div>

					<div className="relative flex flex-col gap-4 p-4 border rounded-lg min-h-[450px]">
						<div className="flex justify-between items-center">
							<h2 className="sm:pl-3 text-muted-foreground text-sm">
								A login form with a CSS file.
							</h2>
							<OpenInV0Button name="example-with-css" className="w-fit" />
						</div>
						<div className="relative flex justify-center items-center min-h-[400px]">
							<ExampleCard />
						</div>
					</div>
				</main>
			</div>
		</main>
	);
}
