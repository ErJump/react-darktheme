import {useState, useEffect} from 'react';
import data from './data';
import Article from './components/Article';

const getThemeFromLS = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "dark-mode"
  }
}

function App() {
  const [theme, setTheme] = useState(getThemeFromLS());

  const changeTheme = () => {
    console.log('clicked')
    if (theme === "dark-mode") {
      setTheme("light-mode")
    } else {
      setTheme("dark-mode")
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme])


  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={changeTheme}>
          {theme === "dark-mode" ? 'light' : 'dark'}
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
