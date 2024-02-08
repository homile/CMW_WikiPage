const WikiPage = ({ params }: { params: { wikiId: string } }) => {
  return <div>위키 페이지 {params.wikiId}</div>;
};

export default WikiPage;
