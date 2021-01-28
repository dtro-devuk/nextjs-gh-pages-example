import Container from '../components/Container';

const blog = () => {
  return (
    <Container>
      <div className="divide-y divide-gray-200 align-text-top max-w-4xl mx-auto mb-16">
        <div className="md:pt-10 flex flex-col justify-center items-center mx-auto mb-16">
          <h1
            className="pb-5 text-lg md:text-3xl text-center
                      text-blue-800 
                      font-bold leading-normal"
          >
            Blog
          </h1>
          <hr />
          <p className="font-normal leading-normal lg:font-light lg:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rerum voluptates
            exercitationem, nostrum dolorem aspernatur debitis facere, nisi dignissimos tempora
            distinctio cum recusandae ut. Laborum obcaecati neque praesentium ipsam amet!A nihil
            sapiente veniam possimus aperiam modi eaque aliquid vitae omnis, nam deleniti laborum
            dolores, ad vero repudiandae cum necessitatibus fugiat sunt pariatur, accusantium hic!
            Cumque quas animi dolor itaque.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default blog;
