export default function GreenScreenPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <header className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-emerald-600">
          Content tools
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Green screen</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Set up a green screen background for your virtual presentation.
        </p>
      </header>

      <section
        aria-label="Green screen preview"
        className="flex aspect-video w-full items-center justify-center rounded-xl bg-gray-900 p-6 text-center text-white"
      >
        <div>
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-emerald-500" />
          <p className="text-lg font-medium">Preview will appear here</p>
          <p className="mt-1 text-sm text-gray-300">
            Choose a background to get started.
          </p>
        </div>
      </section>
    </main>
  );
}
