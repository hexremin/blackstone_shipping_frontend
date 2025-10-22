export interface ResourcesPageData {
  page: {
    resourcesPageBannerSection: {
      bannerImage: {
        node: {
          sourceUrl: string;
        };
      };
      bannerTitle: string;
    };
    resourcesPageNewsSection: {
      newsSectionTitle: string;
      newsSectionContent: string;
    };
    resourcesPageCaseStudyFAQSections: {
      caseStudiesTitle: string;
      faqTitle: string;
    };
    resourcesPageDownloadsSection: {
      downloadsSectionTitle: string;
      downloadSectionContent: string;
      brochureTitle: string;
      brochureContent: string;
      brochureFile: {
        node: {
          sourceUrl: string;
        };
      };
      serviceGuidesTitle: string;
      serviceGuidesContent: string;
      serviceGuidesFile: {
        node: {
          sourceUrl: string;
        };
      };
      whitePapersTitle: string;
      whitePapersContent: string;
      whitePapersFile: {
        node: {
          sourceUrl: string;
        };
      };
    };
  };
}

export interface RecentPostsData {
  posts: {
    nodes: {
      id: string;
      title: string;
      excerpt: string;
      date: string;
      uri: string;
      featuredImage: {
        node: {
          sourceUrl: string;
        };
      } | null;
    }[];
  };
}

export interface RecentPostsVars {
  count: number;
}

export interface NewsCategoriesData {
  categories: {
    nodes: {
      id: string;
      name: string;
      slug: string;
      uri: string;
      description: string;
    }[];
  };
}


export interface PostNode {
  id: string;
  title: string;
  excerpt: string;
  uri: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    } | null;
  } | null;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface GetPostsByCategorySlugData {
  posts: {
    pageInfo: PageInfo;
    nodes: PostNode[];
  };
}

export interface GetPostsByCategorySlugVars {
  slug: string;
  count: number;
  after?: string | null;
}


export interface CaseStudiesData {
  caseStudies: {
    nodes: CaseStudy[];
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  uri: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  } | null;
  caseStudiesOptions: {
    customerDescription: string;
    caseStudyPersonName: string;
    caseStudyPersonDesignation: string;
    caseStudyPersonImage: {
      node: {
        sourceUrl: string;
      };
    } | null;
  } | null;
}



export interface Faq {
  title: string;
  content: string;
}

export interface FaqsData {
  faqs: {
    nodes: Faq[];
  };
}

export interface FaqsVariables {
  search: string;
}

export interface GetNewsByCategoryVariables {
  slug: string;
  count: number;
  after?: string | null;
  search?: string;
}

export interface GetPostDetailsByIDVariables {
  id: string;
}

export interface GetPostDetailsByIDData {
  post: {
    title: string;
    content: string;
    date: string;
    featuredImage: {
      node: {
        sourceUrl: string;
      } | null;
    } | null;
    categories: {
      nodes: {
        id: string;
        name: string;
        slug: string;
      }[];
    };
  } | null;
}


export interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  uri: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    } | null;
  } | null;
}

export interface GetRelatedPostsByIDData {
  posts: {
    nodes: RelatedPost[];
  };
}

export interface GetRelatedPostsByIDVariables {
  categorySlug: string;
  excludePostId: string;
}


export interface MediaNode {
  node: {
    sourceUrl: string;
  };
}

export interface CaseStudiesOptions {
  caseStudyImage: MediaNode | null;
  companyName: string | null;
  companyLogo: MediaNode | null;
  companyLocation: string | null;
  companyDescription: string | null;
  challenges: string | null;
  solutions: string | null;
  results: string | null;
  caseStudyPersonName: string | null;
  caseStudyPersonDesignation: string | null;
  caseStudyPersonImage: MediaNode | null;
}
export interface GetCaseStudyVars {
  slug: string;
}

export interface GetCaseStudyResponse {
  caseStudy: {
    title: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
      };
    };
    caseStudiesOptions?: {
      caseStudyImage?: {
        node: {
          sourceUrl: string;
        };
      };
      customerDescription?: string;
      customerLocation?: string;
      intro?: string;
      challenges?: string;
      solutions?: string;
      keytakeaways?: string;
    };
  } | null;
}


export interface GetDownloadsByCategoryResponse {
  downloads: {
    nodes: {
      title: string;
      downloadOptions: {
        downloadFile: {
          node: {
            mediaItemUrl: string;
          };
        } | null;
      } | null;
    }[];
  };
}

export interface GetDownloadsByCategoryVariables {
  slug: string[];
}
