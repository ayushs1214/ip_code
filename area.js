function calculateTriangleArea(base, height) {
    if (isNaN(base) || isNaN(height)) {
      return "Please enter valid numeric values for base and height.";
    } else {
      const area = (base * height) / 2;
      return "The area of the triangle is: " + area;
    }
  }
  
  // Example usage:
  const base = 5;
  const height = 8;
  console.log(calculateTriangleArea(base, height));
  