import { Alert, AlertDescription, AlertTitle } from '@swipe-app/shared-ui';
import { BillingForm } from '../../../components/forms/billing-form';
import { DashboardHeader } from '../../../components/header';
import { Icons } from '../../../components/icons';
import { DashboardShell } from '../../../components/shell';
import ProtectedRoute from '../../../components/protected-route';
import { stripe } from '../../../lib/stripe';

export const metadata = {
  title: 'Billing',
  description: 'Manage billing and your subscription plan.',
};

export default async function BillingPage() {
  const subscriptionPlan = {
    isPro: false,
    stripeCustomerId: 1,
    stripeSubscriptionId: '1',
    stripeCurrentPeriodEnd: 1,
    name: '',
    description: '',
    stripePriceId: '',
  };
  // If user has a pro plan, check cancel status on Stripe.
  let isCanceled = false;
  if (subscriptionPlan.isPro && subscriptionPlan.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      subscriptionPlan.stripeSubscriptionId
    );
    isCanceled = stripePlan.cancel_at_period_end;
  }

  return (
    <ProtectedRoute redirectPath="dashboard/billing">
      <DashboardShell>
        <DashboardHeader
          heading="Billing"
          text="Manage billing and your subscription plan."
        />
        <div className="grid gap-8">
          <Alert className="!pl-14">
            <Icons.warning />
            <AlertTitle>This is a demo app.</AlertTitle>
            <AlertDescription>
              Swipe app is a demo app using a Stripe test environment. You can
              find a list of test card numbers on the{' '}
              <a
                href="https://stripe.com/docs/testing#cards"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-8"
              >
                Stripe docs
              </a>
              .
            </AlertDescription>
          </Alert>
          <BillingForm
            subscriptionPlan={{
              ...subscriptionPlan,
              isCanceled,
            }}
          />
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
}
