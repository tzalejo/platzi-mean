export const handleError = (message,error,res) =>{
  res.status(500).json({
    message: message,
    error
  });
}