const OnlineOffline = ({ isOnline = true }) => {
  const className = isOnline ? 'bg-green-200' : 'bg-red-200';

  return <span className={`${className} p-2`}>{isOnline ? 'Online' : 'Offiline'}</span>
}

export default OnlineOffline
