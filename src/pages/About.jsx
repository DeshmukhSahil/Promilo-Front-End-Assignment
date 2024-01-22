import AboutUs from '../components/AboutUs.jsx'
const About = () => {
  return (
    <>

      <div className='bg-purple-200 text-center text-white'>
      <AboutUs />

      <div className=" w-50 mx-16 p-6 bg-slate-700 shadow-md rounded-md my-20  font-poppins">
        <h1 className="text-3xl font-bold mb-6">About the project</h1>
        <p className="text-1xl font-bold mb-6">This Project is an assignemt task for Promilo </p>

        <h1 className="text-3xl font-bold mb-6">Tech-Stack used:</h1>
        <p className="text-1xl font-bold mb-6"><strong>React (v18.2.0)</strong>: A JavaScript library for building user interfaces.<br/>

        <strong>React Router DOM (v6.21.3)</strong>: A declarative way to navigate and manage UI state in React applications.<br/>

        <strong>Axios (v1.6.5)</strong>: A promise-based HTTP client for making requests to APIs.<br/>

        <strong>Tailwind CSS (v3.4.1)</strong>: A utility-first CSS framework for quickly building modern designs.<br/>

        <strong>React Toastify (v10.0.4)</strong>: A toast notification library for React applications.<br/>
        <br/>

        <h3>Testing Libraries</h3>
        <strong>@testing-library/jest-dom (v5.17.0)</strong><br/>
        <strong>@testing-library/react (v13.4.0)</strong><br/>
        <strong>@testing-library/user-event (v13.5.0)</strong><br/>

        <strong>Web Vitals (v2.1.4)</strong> A library for tracking web vitals in modern web browsers.<br/>
        <br/>
        <h3> Configuration Files</h3>

        <strong>package.json</strong>: Configuration file for Node.js projects, specifying project metadata and dependencies.<br/>

        <strong>tailwind.config.js</strong>: Configuration file for Tailwind CSS, defining customizations and theme extensions.<br/>

        <strong>postcss.config.js</strong>: Configuration file for PostCSS, used by Tailwind CSS to process styles.<br/>

        <strong>.eslintrc.js</strong>: Configuration file for ESLint, a linting tool for identifying and fixing problems in JavaScript code.<br/>

        <strong>browserslist</strong>: Configuration specifying the browsers and versions targeted for production and development.<br/>
        <br/>
        <h3> Theme Customizations </h3>

        <strong>Custom Fonts</strong> Extended Tailwind CSS theme to include the Poppins font family.<br/>

</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Folder Structure:</h2>
          <pre className="bg-gray-400 p-4 overflow-x-auto rounded-lg text-green-950">
            {`
          src: Contains the source code of the project.

          components: Reusable UI components.
          assets: Static files like images, logos, etc.
          pages: React components for different pages (Home, Products, AboutUs).
          public: Contains the public assets and the main HTML file.`}
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Development Challenges:</h2>
          <p>
          <strong>Integration Challenges:</strong> Integrating third-party libraries or APIs.<br/>
          <br/>
          <strong>Responsive Design:</strong> Ensuring a seamless user experience across different devices.<br/>
          <br/>
          <strong>State Management:</strong> Deciding on the best state management strategy.<br/>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4"> Project Initialization:</h2>
          <ol className="list-decimal ml-6 mb-4">
            <li className="mb-2">
              <strong>Clone the Repository:</strong>
              <pre className="bg-gray-100 p-2 my-2 rounded-lg text-green-950 bg-gray-400">              git clone https://github.com/DeshmukhSahil/Promilo-Front-End-Assignment.git</pre>
            </li>
            <li className="mb-2">
              <strong>Install Dependencies:</strong>
              <pre className="bg-gray-100 p-2 my-2 rounded-lg text-green-950 bg-gray-400">
                {`
              npm install
              `}
              </pre>
            </li>
            <li className="my-2">
              <strong>Run the Application:</strong>
              <pre className="bg-gray-100 p-2 my-2 rounded-lg text-green-950 bg-gray-400">
                {`
              npm run dev
              `}
              </pre>
            </li>
          </ol>
          <p className="mb-4"><strong>Important:</strong> Use the provided credentials for full functionality in login page  <strong>email: test45@yopmail.com, password: Test@123</strong></p>
        </section>
      
      </div>
      <footer className='absolute font-poppins left-[38%] bg-blue-400'>
        Created with 💓 by <strong>Sahil Deshmukh</strong> 
      </footer>
      </div>

      
    </>
  )
}

export default About