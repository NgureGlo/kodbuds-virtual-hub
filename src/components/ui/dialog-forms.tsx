import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import TrialRequestForm from '@/components/forms/TrialRequestForm';
import EnrollmentForm from '@/components/forms/EnrollmentForm';

interface DialogFormsProps {
  isTrialOpen: boolean;
  isEnrollmentOpen: boolean;
  onTrialClose: () => void;
  onEnrollmentClose: () => void;
}

export const DialogForms = ({ 
  isTrialOpen, 
  isEnrollmentOpen, 
  onTrialClose, 
  onEnrollmentClose 
}: DialogFormsProps) => {
  return (
    <>
      <Dialog open={isTrialOpen} onOpenChange={onTrialClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <TrialRequestForm 
            onSuccess={onTrialClose} 
            onClose={onTrialClose} 
          />
        </DialogContent>
      </Dialog>

      <Dialog open={isEnrollmentOpen} onOpenChange={onEnrollmentClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <EnrollmentForm 
            onSuccess={onEnrollmentClose} 
            onClose={onEnrollmentClose} 
          />
        </DialogContent>
      </Dialog>
    </>
  );
};