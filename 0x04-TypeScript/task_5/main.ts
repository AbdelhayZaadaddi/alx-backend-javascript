// MajorCredits Interface
interface MajorCredits {
  brand: "MajorCredits"; // Brand to uniquely identify the interface
  credits: number;
}

// MinorCredits Interface
interface MinorCredits {
  brand: "MinorCredits"; // Brand to uniquely identify the interface
  credits: number;
}

// Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    brand: "MajorCredits",
    credits: subject1.credits + subject2.credits,
  };
}

// Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    brand: "MinorCredits",
    credits: subject1.credits + subject2.credits,
  };
}
