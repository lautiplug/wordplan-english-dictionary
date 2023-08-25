export const bugReport = () => {

  const handleClick = (e) => {
    e.preventDefault()
    const recipient = 'elautaropintos@gmail.com'
    const subject = encodeURIComponent('Hi! I found a bug.');
    const body = encodeURIComponent('Messagge content here.');
    const recruiterEmail = '';
  
    const mailtoLink = `mailto:${recipient}?cc=${recruiterEmail}&subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    handleClick
  )
}