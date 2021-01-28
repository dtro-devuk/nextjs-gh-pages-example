import Container from '@/components/Container';

const Home = () => {
  return (
    <Container>
      <div className="divide-y divide-gray-200 align-text-top max-w-4xl mx-auto mb-16">
        <div className="md:pt-10 flex flex-col justify-center items-center mx-auto mb-16">
          <h1
            className="pb-5 text-lg md:text-3xl text-center
                      text-blue-800 
                      font-bold leading-normal"
          >
            Next.js Static HTML app deployment to GitHub Project Pages Demo
          </h1>
          <div className="font-normal leading-normal sm:text-sm lg:leading-relaxed">
            <p>
              Hi all, this is an demo of how we can deploy a Next.js v10 app, with Tailwind CSS
              styling to GitHub Project pages.{' '}
            </p>
            <br />
            <p>
              GitHub Project pages can be hosted alongside specific GitHub projects / repositories.
              They can be documents or web pages.
            </p>
            <br />
            <p>
              The static Html pages here have been created in the GitHub repository, and have been
              pushed to a "gh-pages" branch and published.
            </p>
            <br />
            <p>
              This app was created with Next.js v10+ and Tailwind 2.0+ and exported to static HTML.
              Since the pages are statically generated at build time, they are very fast to render,
              despite still being reactive. The benefit being that they are optimized and do not
              require any server-side computation, giving a faster loading experience.
            </p>
            <br />
            <p>
              Further details of how this was done can be read in the README file, in the main
              project repository.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
