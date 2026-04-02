import type { JobIncome } from "../../types";
import { NumberField } from "../NumberField/NumberField";

type JobIncomeFormProps = {
  job: JobIncome;
  index: number;
  onChange: (job: JobIncome) => void;
  onRemove?: () => void;
  labelPrefix: string;
};

export const JobIncomeForm = ({
  job,
  index,
  onChange,
  onRemove,
  labelPrefix,
}: JobIncomeFormProps) => (
  <div className="job-card">
    <div className="job-card__header">
      <div className="job-card__title">
        {labelPrefix} {index + 1}
      </div>
      {onRemove ? (
        <button type="button" className="button button--ghost" onClick={onRemove}>
          Remove job
        </button>
      ) : null}
    </div>
    <label className="field">
      <span className="field__label">Job label</span>
      <input
        className="field__input"
        type="text"
        value={job.label}
        onChange={(event) => onChange({ ...job, label: event.target.value })}
        placeholder="Employer or role"
      />
    </label>
    <div className="grid__three">
      <NumberField
        label="YTD gross wages"
        value={job.ytdWages}
        onChange={(value) => onChange({ ...job, ytdWages: value })}
      />
      <NumberField
        label="YTD federal withholding"
        value={job.ytdWithholding}
        onChange={(value) => onChange({ ...job, ytdWithholding: value })}
      />
      <NumberField
        label="YTD pre-tax deductions"
        value={job.ytdPreTax}
        onChange={(value) => onChange({ ...job, ytdPreTax: value })}
        hint="401(k), HSA, pre-tax health"
      />
    </div>
    <div className="grid__three">
      <NumberField
        label="Gross per paycheck"
        value={job.perPaycheckWages}
        onChange={(value) => onChange({ ...job, perPaycheckWages: value })}
      />
      <NumberField
        label="Federal withholding per paycheck"
        value={job.perPaycheckWithholding}
        onChange={(value) => onChange({ ...job, perPaycheckWithholding: value })}
      />
      <NumberField
        label="Pre-tax per paycheck"
        value={job.perPaycheckPreTax}
        onChange={(value) => onChange({ ...job, perPaycheckPreTax: value })}
      />
    </div>
    <NumberField
      label="Paychecks remaining"
      value={job.paychecksRemaining}
      onChange={(value) => onChange({ ...job, paychecksRemaining: value })}
      step={1}
    />
  </div>
);
