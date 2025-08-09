import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle, Download } from "lucide-react";

export default function AdminTechUpdatesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Tech Updates</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Fetch External News
          </Button>
          <Button asChild>
            <Link href="/admin/tech-updates/new">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add New Update
            </Link>
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Tech Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            List of tech updates will appear here. You can review, edit, and publish updates from external APIs or create your own.
          </p>
          {/* TODO: Implement tech update listing, filtering, and pagination */}
        </CardContent>
      </Card>
    </div>
  );
}