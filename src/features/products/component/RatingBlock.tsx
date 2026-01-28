import { Star } from "lucide-react";

interface RatingBlockProps {
  rating: number;
  stock?: number;
}

export function RatingBlock({ rating, stock }: RatingBlockProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-50 to-orange-50 px-2.5 py-1 rounded-lg border border-yellow-200">
        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
        <span className="text-sm text-gray-900 font-semibold">
          {rating.toFixed(1)}
        </span>
      </div>

      {stock !== undefined && (
        <span className="text-xs text-gray-500">• {stock} in stock</span>
      )}
    </div>
  );
}
