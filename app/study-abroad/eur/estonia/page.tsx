import { redirect } from 'next/navigation';

// Estonia page converted to Georgia - redirect to Georgia study page
export default function EstoniaStudyPage() {
  redirect('/study-abroad/georgia/');
}
