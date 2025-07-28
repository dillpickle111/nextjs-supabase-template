import { UserProfile } from "@/components/user-profile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <SignOutButton>
          <Button variant="outline">Sign Out</Button>
        </SignOutButton>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserProfile />
        
        <Card>
          <CardHeader>
            <CardTitle>Supabase Integration</CardTitle>
            <CardDescription>Database connection status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Connected to Supabase</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your Supabase database is ready for use. You can now create tables, 
                manage data, and build your application features.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>Next steps for your application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">1. Set up your environment variables</h4>
            <p className="text-sm text-muted-foreground">
              Copy the values from <code className="bg-muted px-1 rounded">env.example</code> to <code className="bg-muted px-1 rounded">.env.local</code> 
              and fill in your actual Supabase and Clerk credentials.
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">2. Create your database schema</h4>
            <p className="text-sm text-muted-foreground">
              Use the Supabase dashboard to create tables and set up your database structure.
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">3. Deploy to Vercel</h4>
            <p className="text-sm text-muted-foreground">
              Connect your GitHub repository to Vercel for automatic deployments.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 