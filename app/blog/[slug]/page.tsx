const BlogDetailsPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <h1>Param: {slug}</h1>;
};

export default BlogDetailsPage;
