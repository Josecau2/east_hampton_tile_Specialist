import { BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";

import { Rating } from "@/components/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  verified?: boolean;
}

interface Reviews1Props {
  reviews?: Review[] | null;
  title?: string;
  className?: string;
}

const Reviews1 = ({
  reviews = [],
  title = "Customer Reviews",
  className,
}: Reviews1Props) => {
  const safeReviews = reviews ?? [];
  const averageRating =
    safeReviews.length > 0
      ? safeReviews.reduce((sum, review) => sum + review.rating, 0) /
        safeReviews.length
      : 0;

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
          {safeReviews.length > 0 ? (
            <div className="mt-2 flex items-center gap-3">
              <Rating rate={averageRating} className="[&_svg]:size-5" />
              <span className="text-sm text-muted-foreground">
                {averageRating.toFixed(1)} out of 5 · {safeReviews.length} reviews
              </span>
            </div>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground">
              Add your customer reviews to display them here.
            </p>
          )}
        </div>

        {/* Reviews List */}
        <div className="space-y-0">
          {safeReviews.map((review, index) => (
            <div key={review.id}>
              {index > 0 && <Separator className="my-6" />}
              <div className="space-y-3">
                {/* Rating & Title */}
                <div>
                  <Rating rate={review.rating} className="[&_svg]:size-4" />
                  <h3 className="mt-2 font-medium">{review.title}</h3>
                </div>

                {/* Content */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {review.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="size-8">
                    <AvatarImage
                      src={review.author.avatar}
                      alt={review.author.name}
                    />
                    <AvatarFallback className="text-xs">
                      {review.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">{review.author.name}</span>
                    {review.verified && (
                      <span className="flex items-center gap-1 text-emerald-600">
                        <BadgeCheck className="size-4" />
                        <span className="text-xs">Verified Purchase</span>
                      </span>
                    )}
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Reviews1 };

