import { NextPageContext } from "next";
import { Layout } from "../components/Layout";
import SectionSubtitle from "../components/Sections/SectionSubtitle";

const Error = ({ statusCode, isLoading, yourUrl }:{statusCode:number, isLoading:boolean, yourUrl:string }) => {
  const title = `Ошибка ${statusCode}`
  const description = `Страницы не существует`
  const imgUrl = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  const subtitleLink = "/"
  const subtitleText = statusCode
    ? `Ошибка ${statusCode} получена от сервера`
    : "Ошибка получена от клиента";
  const buttonText = "На главную"
  return (
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
      imgUrl={imgUrl}
    >
      <SectionSubtitle 
        subtitleLink={subtitleLink}
        subtitleText={subtitleText}
        buttonText={buttonText}
      />
    <p>
      {statusCode
        ? `Ошибка ${statusCode} получена от сервера`
        : "Ошибка получена от клиента"}
    </p>
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;