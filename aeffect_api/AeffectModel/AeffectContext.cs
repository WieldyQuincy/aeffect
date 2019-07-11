using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace aeffect_api.AeffectModel
{
  public partial class AeffectContext : DbContext
  {
    public AeffectContext()
    {
    }

    public AeffectContext(DbContextOptions<AeffectContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CurrentStay> CurrentStay { get; set; }
    public virtual DbSet<Employee> Employee { get; set; }
    public virtual DbSet<Incident> Incident { get; set; }
    public virtual DbSet<Location> Location { get; set; }
    public virtual DbSet<Marketing> Marketing { get; set; }
    public virtual DbSet<Patient> Patient { get; set; }
    public virtual DbSet<Payor> Payor { get; set; }
    public virtual DbSet<Sources> Sources { get; set; }
    public virtual DbSet<Title> Title { get; set; }
    public virtual DbSet<Unit> Unit { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
        optionsBuilder.UseSqlServer("Server=(LocalDB)\\MSSQLLocalDB;Database=Aeffect;Trusted_Connection=True;MultipleActiveResultSets=True");
      }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

      modelBuilder.Entity<CurrentStay>(entity =>
      {
        entity.HasKey(e => e.StayId);

        entity.HasIndex(e => e.AdmittingMd)
                  .HasName("fkIdx_145");

        entity.HasIndex(e => e.PatientId)
                  .HasName("fkIdx_62");

        entity.HasIndex(e => e.PayorId)
                  .HasName("fkIdx_141");

        entity.HasIndex(e => e.ReferralSource)
                  .HasName("fkIdx_88");

        entity.HasIndex(e => e.Screener)
                  .HasName("fkIdx_81");

        entity.Property(e => e.StayId).ValueGeneratedNever();

        entity.Property(e => e.AdmittingMd).HasColumnName("AdmittingMD");

        entity.Property(e => e.Date).HasColumnType("date");

        entity.Property(e => e.InquiryDate).HasColumnType("date");

        entity.HasOne(d => d.AdmittingMdNavigation)
                  .WithMany(p => p.CurrentStayAdmittingMdNavigation)
                  .HasForeignKey(d => d.AdmittingMd)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_145");

        entity.HasOne(d => d.Patient)
                  .WithMany(p => p.CurrentStay)
                  .HasForeignKey(d => d.PatientId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_62");

        entity.HasOne(d => d.Payor)
                  .WithMany(p => p.CurrentStay)
                  .HasForeignKey(d => d.PayorId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_141");

        entity.HasOne(d => d.ReferralSourceNavigation)
                  .WithMany(p => p.CurrentStay)
                  .HasForeignKey(d => d.ReferralSource)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_88");

        entity.HasOne(d => d.ScreenerNavigation)
                  .WithMany(p => p.CurrentStayScreenerNavigation)
                  .HasForeignKey(d => d.Screener)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_81");
      });

      modelBuilder.Entity<Employee>(entity =>
      {
        entity.HasKey(e => e.EmpId);

        entity.HasIndex(e => e.TitleId)
                  .HasName("fkIdx_26");

        entity.Property(e => e.EmpId)
                  .HasColumnName("EmpID")
                  .ValueGeneratedNever();

        entity.Property(e => e.FirstName)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.LastName)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.HasOne(d => d.Title)
                  .WithMany(p => p.Employee)
                  .HasForeignKey(d => d.TitleId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_26");
      });

      modelBuilder.Entity<Incident>(entity =>
      {
        entity.HasIndex(e => e.StayId)
                  .HasName("fkIdx_100");

        entity.Property(e => e.IncidentId).ValueGeneratedNever();

        entity.Property(e => e.EventDate).HasColumnType("date");

        entity.Property(e => e.EventDescription)
                  .IsRequired()
                  .HasMaxLength(4000)
                  .IsUnicode(false);

        entity.Property(e => e.EventLength).HasColumnType("time(4)");

        entity.Property(e => e.EventType)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.InjuryDetails)
                  .HasMaxLength(2000)
                  .IsUnicode(false);

        entity.Property(e => e.InjurySeverity)
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.HasOne(d => d.Stay)
                  .WithMany(p => p.Incident)
                  .HasForeignKey(d => d.StayId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_100");
      });

      modelBuilder.Entity<Location>(entity =>
      {
        entity.Property(e => e.LocationId).ValueGeneratedNever();

        entity.Property(e => e.City)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.County)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.ZipCode)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);
      });

      modelBuilder.Entity<Marketing>(entity =>
      {
        entity.HasIndex(e => e.EmpId)
                  .HasName("fkIdx_125");

        entity.HasIndex(e => e.SourceId)
                  .HasName("fkIdx_122");

        entity.Property(e => e.Id).ValueGeneratedNever();

        entity.Property(e => e.ContactType)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.EmpId).HasColumnName("EmpID");

        entity.Property(e => e.FollowUpAction)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.FollowUpDate).HasColumnType("date");

        entity.Property(e => e.FollowUpObjective)
                  .IsRequired()
                  .HasMaxLength(500)
                  .IsUnicode(false);

        entity.Property(e => e.VisitDate).HasColumnType("date");

        entity.HasOne(d => d.Emp)
                  .WithMany(p => p.Marketing)
                  .HasForeignKey(d => d.EmpId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_125");

        entity.HasOne(d => d.Source)
                  .WithMany(p => p.Marketing)
                  .HasForeignKey(d => d.SourceId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_122");
      });

      modelBuilder.Entity<Patient>(entity =>
      {
        entity.HasIndex(e => e.UnitId)
                  .HasName("fkIdx_110");

        entity.Property(e => e.PatientId).ValueGeneratedNever();

        entity.Property(e => e.AddressLine1)
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.AddressLine2)
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.City)
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.Dob)
                  .HasColumnName("dob")
                  .HasColumnType("date");

        entity.Property(e => e.FirstName)
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.LastName)
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.State)
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.HasOne(d => d.Unit)
                  .WithMany(p => p.Patient)
                  .HasForeignKey(d => d.UnitId)
                  .HasConstraintName("FK_110");
      });

      modelBuilder.Entity<Payor>(entity =>
      {
        entity.Property(e => e.PayorId).ValueGeneratedNever();

        entity.Property(e => e.PayorName)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.PayorType)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);
      });

      modelBuilder.Entity<Sources>(entity =>
      {
        entity.HasKey(e => e.SourceId);

        entity.HasIndex(e => e.LocationId)
                  .HasName("fkIdx_40");

        entity.Property(e => e.SourceId).ValueGeneratedNever();

        entity.Property(e => e.SourceName)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.SourceOrganization)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.SourceType)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.HasOne(d => d.Location)
                  .WithMany(p => p.Sources)
                  .HasForeignKey(d => d.LocationId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_40");
      });

      modelBuilder.Entity<Title>(entity =>
      {
        entity.Property(e => e.TitleId).ValueGeneratedNever();

        entity.Property(e => e.TitleName)
                  .IsRequired()
                  .HasMaxLength(30)
                  .IsUnicode(false);
      });

      modelBuilder.Entity<Unit>(entity =>
      {
        entity.HasIndex(e => e.LocationId)
                  .HasName("fkIdx_48");

        entity.Property(e => e.UnitId).ValueGeneratedNever();

        entity.Property(e => e.Name)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.HasOne(d => d.Location)
                  .WithMany(p => p.Unit)
                  .HasForeignKey(d => d.LocationId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_48");
      });
    }
  }
}
