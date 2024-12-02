export const CategoryPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const title = id ? id.charAt(0).toUpperCase() + id.slice(1) : "";

  return (
    <div>
      <h1>Категория: {title}</h1>
    </div>
  );
};

export default CategoryPage;
