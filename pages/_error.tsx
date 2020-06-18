import { NextPageContext } from "next";
import { Layout } from "../components/Layout";
import SectionSubtitle from "../components/Sections/SectionSubtitle";
import { MaterialContent } from "../UI/Molecules/MaterialContent";

const Error = ({ statusCode, isLoading, yourUrl, statusMessage }:{statusCode:number, isLoading:boolean, yourUrl?:string, statusMessage?:string }) => { 
  const title = `Ошибка ${statusCode}`
  const description = statusMessage || `Страницы не существует`
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
      <MaterialContent>
          <h3>{statusCode
        ? `Ошибка ${statusCode} получена от сервера`
        : "Ошибка получена от клиента"}</h3>
          <p className="color-heading text-adaptive">{`Ошибка ${description}`}, просьба вернуться или перейти на главную</p>
      </MaterialContent>
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;