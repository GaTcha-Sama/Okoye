import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold">BIENVENUE SUR OKOYE</h1>
      <Footer />
    </div>
  );
}
