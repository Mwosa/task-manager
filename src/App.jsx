import React, { useState, useEffect } from 'react';
import { Calendar, Users } from 'lucide-react';
import { ThemeContext } from './context/ThemeContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { 
  Navbar, 
  Footer, 
  TaskManager, 
  UserDirectory,
  Button 
} from './components';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [activeTab, setActiveTab] = useState('tasks');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen flex flex-col transition-colors duration-200 ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
          <Navbar />
          
          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="flex space-x-1 bg-gray-200 dark:bg-gray-800 p-1 rounded-lg w-fit mx-auto">
                {[
                  { id: 'tasks', label: 'Tasks', icon: Calendar },
                  { id: 'users', label: 'Users', icon: Users }
                ].map(tab => (
                  <Button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    variant={activeTab === tab.id ? 'primary' : 'ghost'}
                    className="flex items-center space-x-2"
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="animate-fade-in">
              {activeTab === 'tasks' && <TaskManager />}
              {activeTab === 'users' && <UserDirectory />}
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;