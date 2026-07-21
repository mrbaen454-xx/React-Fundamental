import Header from "./components/Header";
import Hero from "./components/Hero";
import JobList from "./components/JobList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bungkus-app">
      <Header />
      <main>
        <Hero />
        <JobList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
