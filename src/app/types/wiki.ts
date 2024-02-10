export interface Wiki {
  id: string;
  title: string;
  content: string;
}

export interface typePostWiki {
  title: string;
  content: string;
}


export interface WikiCardProps {
  wiki: Wiki;
}
