import {useState, useEffect} from 'react';
import data from './data';
import Article from './components/Article';

const getThemeFromLS = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } 
  return "dark-theme"
}

function App() {
  const [theme, setTheme] = useState(getThemeFromLS());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme])


  return (
    <section className="section-center">
      <div className="container">
        <button className="btn">
          {theme === "dark-theme" ? 'dark' : 'light'}
        </button>
        <section className="article-section">
          {data.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default App;
