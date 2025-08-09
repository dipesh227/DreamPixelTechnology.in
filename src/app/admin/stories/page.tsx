import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default function AdminStoriesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Stories</h1>
        <Button asChild>
          <Link href="/admin/stories/new">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Story
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Stories</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            List of stories will appear here. You can create, edit, and publish your Google Web Stories.
          </p>
          {/* TODO: Implement story listing, filtering, and pagination */}
        </CardContent>
      </Card>
    </div>
  );
}