import logo from "/logo.svg";

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-4 flex items-center justify-between">
     <img src={logo} alt="logo" className="h-8 w-auto" />
      <nav className="flex gap-6">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">About</a>
        <a href="#" className="hover:text-gray-400">How it works</a>
        <a href="#" className="hover:text-gray-400">Token design</a>
        <a href="#" className="hover:text-gray-400">YARD flywheel</a>
      </nav>
    </header>
  );
}
