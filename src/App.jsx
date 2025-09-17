import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Backyard from "./components/Backyard";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="p-8">
        <Hero />
        <Backyard />
      </main>
    </div>
  );
}
