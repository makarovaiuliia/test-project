import Catalog from '@/components/Catalog';

export default function CatalogPage() {
    return (
        <>
            <header className="py-16 px-300px bg-violet text-white text-center">
                <button type="button" className="absolute right-16 top-8 py-2 px-4 border-1px rounded-lg ">
                    Выход
                </button>
                <div>
                    <h1 className="text-3xl">Наша команда</h1>
                    <p className="text-2xl">
                        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и
                        умеющие находить выход из любых, даже самых сложных ситуаций.
                    </p>
                </div>
            </header>
            <main className="mt-10">
                <Catalog />
            </main>
        </>
    );
}
