import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Int "mo:core/Int";

actor {
  public type WaitlistEntry = {
    name : Text;
    email : Text;
    timestamp : Time.Time;
  };

  module WaitlistEntry {
    public func compare(entry1 : WaitlistEntry, entry2 : WaitlistEntry) : Order.Order {
      Int.compare(entry1.timestamp, entry2.timestamp);
    };
  };

  public type FAQ = {
    question : Text;
    answer : Text;
  };

  module FAQ {
    public func compare(faq1 : FAQ, faq2 : FAQ) : Order.Order {
      Text.compare(faq1.question, faq2.question);
    };
  };

  public type Testimonial = {
    name : Text;
    quote : Text;
  };

  module Testimonial {
    public func compare(t1 : Testimonial, t2 : Testimonial) : Order.Order {
      Text.compare(t1.name, t2.name);
    };
  };

  let waitlist = Map.empty<Text, WaitlistEntry>();
  let faqs = Map.empty<Text, FAQ>();
  let testimonials = Map.empty<Text, Testimonial>();

  public shared ({ caller }) func addWaitlistEntry(name : Text, email : Text) : async () {
    let entry : WaitlistEntry = {
      name;
      email;
      timestamp = Time.now();
    };
    waitlist.add(email, entry);
  };

  public query ({ caller }) func getWaitlistCount() : async Nat {
    waitlist.size();
  };

  public shared ({ caller }) func addFAQ(question : Text, answer : Text) : async () {
    let faq : FAQ = { question; answer };
    faqs.add(question, faq);
  };

  public shared ({ caller }) func addTestimonial(name : Text, quote : Text) : async () {
    let testimonial : Testimonial = { name; quote };
    testimonials.add(name, testimonial);
  };

  public query ({ caller }) func getAllFAQs() : async [FAQ] {
    faqs.values().toArray().sort();
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray().sort();
  };
};
