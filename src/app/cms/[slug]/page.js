import { fetchPageData } from "@/models/Page";
import React from "react";

const page = async ({params}) => { 
  const pageSlug  = params.slug;
  const page_data = await fetchPageData(pageSlug);

  return (
    <main className="py-4">
      <div className="py-8 cms__page__wrapper">
          <div className="container">
            <h1 className="h2 mb-3 heading-line relative">
              {page_data?.page_title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: page_data?.page_content }}></div>
          </div>
      </div>
    </main>
  );
};

export default page;
