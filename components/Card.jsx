import CustomLink from './CustomLink';

export default function Card({ title, href, isi }) {
  return (
    <div className='p-8 border rounded-lg'>
      <h2>{title}</h2>
      <p>{isi}</p>
      <CustomLink href={href}>Link</CustomLink>
    </div>
  );
}
