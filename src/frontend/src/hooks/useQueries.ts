import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useGetAllFAQs() {
  const { actor, isFetching } = useActor();
  return useQuery<Array<{ question: string; answer: string }>>({
    queryKey: ["faqs"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllFAQs();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Array<{ name: string; quote: string }>>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetWaitlistCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["waitlistCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getWaitlistCount();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 30000,
  });
}

export function useAddWaitlistEntry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({ name, email }: { name: string; email: string }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addWaitlistEntry(name, email);
    },
  });
}
