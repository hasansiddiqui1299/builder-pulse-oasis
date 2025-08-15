export default function Collections() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4 max-w-md mx-auto px-4">
        <div className="w-16 h-16 mx-auto bg-brand-100 rounded-full flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-brand-600"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 22 12 18.27 5.82 22 7 13.87 2 9l6.91-.74L12 2z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-foreground">Collections</h1>
        <p className="text-muted-foreground">
          Our collections page is coming soon! We're curating the perfect selection of premium menswear for you.
        </p>
        <div className="text-sm text-brand-600">
          Continue prompting to have this page filled with beautiful content!
        </div>
      </div>
    </div>
  );
}
