'use client';
import Link from 'next/link';

export default function NotFound() {

  return (
    <main className="min-h-[70vh] grid place-items-center px-6">
      <div className="text-center max-w-xl">
        <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 dark:border-neutral-700">
          404 — Page introuvable
        </span>

        <h1 className="mt-4 text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Oups… cette page n’existe pas
        </h1>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold
                       bg-black text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
                       dark:bg-white dark:text-black dark:focus:ring-white transition"
          >
            ⤶ Retour à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
