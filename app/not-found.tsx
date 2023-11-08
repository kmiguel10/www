import Link from "next/link";
import Base from "./components/layouts/base";
import ContainerLayout from "./components/layouts/container";
import Button from "./components/ui/button";

export const metadata = {
  title: "Error: 404",
};

export default function NotFound() {
  return (
    <Base>
      <ContainerLayout className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium text-gray-12 md:text-5xl">
          <pre className="rounded-lg border border-gray-6 bg-gray-4 p-2 md:rounded-xl md:p-3">
            PageNotFound()
          </pre>
        </h1>

        <Button
          href="/"
          size="md"
          variant="secondary"
          intent="primary"
          className="mt-6"
        >
          Return home
        </Button>
      </ContainerLayout>
    </Base>
  );
}
