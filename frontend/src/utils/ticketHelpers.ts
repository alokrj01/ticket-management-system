 export const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-50 text-green-700 border-green-200";

      case "in_progress":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";

      case "closed":
        return "bg-red-50 text-red-700 border-red-200";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  export const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-50 text-red-700 border-red-200";

      case "medium":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";

      case "low":
        return "bg-green-50 text-green-700 border-green-200";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };